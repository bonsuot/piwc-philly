import { siteSettings } from "./siteSettings";
import { navigation } from "./navigation";
import { homepage } from "./homepage";
import { imageTextSection } from "./objects/imageTextSection";
import { location } from "./location";
import { service } from "./service";
import { ministry } from "./ministry";
import { sermon } from "./sermon";
import { sermonSeries } from "./sermonSeries";
import { event } from "./event";
import { value } from "./value";
import { valuesSection } from "./objects/valuesSection";

import { link } from "./objects/link";
import { cta } from "./objects/cta";
import { accessibleImage } from "./objects/accessibleImage";
import { heroSlide } from "./objects/heroSlide";
import { page } from "./page";
import { pageHero } from "./objects/pageHero";
import { ctaSection } from "./objects/ctaSection";
import { richTextSection } from "./objects/richTextSection";
import { faqSection } from "./objects/faqSection";
import { serviceInfoSection } from "./objects/serviceInfoSection";
import { locationSection } from "./objects/locationSection";
import { ministryGridSection } from "./objects/ministryGridSection";
import { eventGridSection } from "./objects/eventGridSection";
import { sermonGridSection } from "./objects/sermonGridSection";
import { prayerRequestSection } from "./objects/prayerRequestSection";
import {person} from "./person";
import {peopleGridSection} from "./objects/peopleGridSection";
import { livestreamSection } from "./objects/livestreamSection";
import { seriesGridSection } from "./objects/seriesGridSection";
import { seo } from "./objects/seo";

export const schemaTypes = [
    // Documents
    siteSettings,
    navigation,
    homepage,
    location,
    service,
    ministry,
    sermon,
    sermonSeries,
    event,
    value,
    valuesSection,
    person,
    peopleGridSection,


    // Objects
    link,
    cta,
    accessibleImage,
    heroSlide,
    imageTextSection,
    page,
    pageHero,
    ctaSection,
    richTextSection,
    faqSection,
    serviceInfoSection,
    locationSection,
    ministryGridSection,
    eventGridSection,
    sermonGridSection,
    prayerRequestSection,
    livestreamSection,
    seriesGridSection,
    seo,
];
