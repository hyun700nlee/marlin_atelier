import { isSanityConfigured, mapSanitySiteSettings, sanityClient, siteSettingsQuery } from "./sanity";
import { defaultSiteSettings } from "./site";
import type { SiteSettings } from "./types";

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!isSanityConfigured) {
    return defaultSiteSettings;
  }

  try {
    const result = await sanityClient.fetch(siteSettingsQuery);
    return mapSanitySiteSettings(result, defaultSiteSettings);
  } catch (error) {
    console.warn("Falling back to default site settings because Sanity fetch failed.", error);
    return defaultSiteSettings;
  }
}
