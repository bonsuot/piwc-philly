export function resolveInternalUrl(reference: any) {
  if (!reference) return "#";

  switch (reference._type) {
    case "page": {
      const segments: string[] = [];

      if (reference.parent?.parent?.slug) {
        segments.push(reference.parent.parent.slug);
      }

      if (reference.parent?.slug) {
        segments.push(reference.parent.slug);
      }

      if (reference.slug) {
        segments.push(reference.slug);
      }

      return `/${segments.join("/")}`;
    };

    case "ministry":
      return `/get-involved/ministries/${reference.slug}`;

    case "event":
      return `/events/${reference.slug}`;

    case "sermon":
      return `/media/sermons/${reference.slug}`;

    default:
      return "#";
  }
}

export function resolveLink(link: any) {
  if (!link) return "#";

  if (link.linkType === "external") {
    return link.externalUrl ?? "#";
  }

  if (link.linkType === "route") {
    return link.internalPath ?? "#";
  }

  if (link.internalReference) {
    return resolveInternalUrl(link.internalReference);
  }

  // Temporary fallback while we migrate old Sanity links
  if (link.internalPath) {
    return link.internalPath;
  }

  return "#";
}