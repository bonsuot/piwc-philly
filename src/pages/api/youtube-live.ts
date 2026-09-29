import type { APIRoute } from "astro";
import { sanityClient } from "sanity:client";

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const apiKey = import.meta.env.YOUTUBE_API_KEY;

    if (!apiKey) {
      console.error("YOUTUBE_API_KEY is not configured.");

      return new Response(
        JSON.stringify({
          isLive: false,
          error: "YouTube API is not configured.",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Get the channel ID from Sanity Site Settings.
    const settings = await sanityClient.fetch(`
      *[_id == "siteSettings"][0] {
        youtubeChannelId
      }
    `);

    const channelId = settings?.youtubeChannelId;

    if (!channelId) {
      console.error("YouTube Channel ID is not configured in Sanity.");

      return new Response(
        JSON.stringify({
          isLive: false,
          error: "YouTube channel is not configured.",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const params = new URLSearchParams({
      part: "snippet",
      channelId,
      eventType: "live",
      type: "video",
      maxResults: "1",
      key: apiKey,
    });

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?${params.toString()}`
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        "YouTube API request failed:",
        response.status,
        errorText
      );

      return new Response(
        JSON.stringify({
          isLive: false,
          error: "Unable to check YouTube live status.",
        }),
        {
          status: 502,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const data = await response.json();

    const liveVideo = data?.items?.[0];

    if (!liveVideo?.id?.videoId) {
      return new Response(
        JSON.stringify({
          isLive: false,
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=60, s-maxage=60, stale-while-revalidate=300",
          },
        }
      );
    }

    const videoId = liveVideo.id.videoId;

    return new Response(
      JSON.stringify({
        isLive: true,
        videoId,
        title: liveVideo.snippet?.title ?? null,
        watchUrl: `https://www.youtube.com/watch?v=${videoId}`,
        embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=60, s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  } catch (error) {
    console.error("YouTube live check failed:", error);

    return new Response(
      JSON.stringify({
        isLive: false,
        error: "Unable to check livestream status.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};