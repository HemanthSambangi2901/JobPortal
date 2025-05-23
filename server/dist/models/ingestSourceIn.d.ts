import { AdobeSignConfig } from "./adobeSignConfig";
import { CronConfig } from "./cronConfig";
import { DocusignConfig } from "./docusignConfig";
import { GithubConfig } from "./githubConfig";
import { HubspotConfig } from "./hubspotConfig";
import { SegmentConfig } from "./segmentConfig";
import { ShopifyConfig } from "./shopifyConfig";
import { SlackConfig } from "./slackConfig";
import { StripeConfig } from "./stripeConfig";
import { SvixConfig } from "./svixConfig";
import { ZoomConfig } from "./zoomConfig";
interface _IngestSourceInFields {
    name: string;
    uid?: string | null;
}
interface IngestSourceInGenericWebhook {
    type: "generic-webhook";
}
interface IngestSourceInCron {
    type: "cron";
    config: CronConfig;
}
interface IngestSourceInAdobeSign {
    type: "adobe-sign";
    config: AdobeSignConfig;
}
interface IngestSourceInBeehiiv {
    type: "beehiiv";
    config: SvixConfig;
}
interface IngestSourceInBrex {
    type: "brex";
    config: SvixConfig;
}
interface IngestSourceInClerk {
    type: "clerk";
    config: SvixConfig;
}
interface IngestSourceInDocusign {
    type: "docusign";
    config: DocusignConfig;
}
interface IngestSourceInGithub {
    type: "github";
    config: GithubConfig;
}
interface IngestSourceInGuesty {
    type: "guesty";
    config: SvixConfig;
}
interface IngestSourceInHubspot {
    type: "hubspot";
    config: HubspotConfig;
}
interface IngestSourceInIncidentIo {
    type: "incident-io";
    config: SvixConfig;
}
interface IngestSourceInLithic {
    type: "lithic";
    config: SvixConfig;
}
interface IngestSourceInNash {
    type: "nash";
    config: SvixConfig;
}
interface IngestSourceInPleo {
    type: "pleo";
    config: SvixConfig;
}
interface IngestSourceInReplicate {
    type: "replicate";
    config: SvixConfig;
}
interface IngestSourceInResend {
    type: "resend";
    config: SvixConfig;
}
interface IngestSourceInSafebase {
    type: "safebase";
    config: SvixConfig;
}
interface IngestSourceInSardine {
    type: "sardine";
    config: SvixConfig;
}
interface IngestSourceInSegment {
    type: "segment";
    config: SegmentConfig;
}
interface IngestSourceInShopify {
    type: "shopify";
    config: ShopifyConfig;
}
interface IngestSourceInSlack {
    type: "slack";
    config: SlackConfig;
}
interface IngestSourceInStripe {
    type: "stripe";
    config: StripeConfig;
}
interface IngestSourceInStych {
    type: "stych";
    config: SvixConfig;
}
interface IngestSourceInSvix {
    type: "svix";
    config: SvixConfig;
}
interface IngestSourceInZoom {
    type: "zoom";
    config: ZoomConfig;
}
export type IngestSourceIn = _IngestSourceInFields & (IngestSourceInGenericWebhook | IngestSourceInCron | IngestSourceInAdobeSign | IngestSourceInBeehiiv | IngestSourceInBrex | IngestSourceInClerk | IngestSourceInDocusign | IngestSourceInGithub | IngestSourceInGuesty | IngestSourceInHubspot | IngestSourceInIncidentIo | IngestSourceInLithic | IngestSourceInNash | IngestSourceInPleo | IngestSourceInReplicate | IngestSourceInResend | IngestSourceInSafebase | IngestSourceInSardine | IngestSourceInSegment | IngestSourceInShopify | IngestSourceInSlack | IngestSourceInStripe | IngestSourceInStych | IngestSourceInSvix | IngestSourceInZoom);
export declare const IngestSourceInSerializer: {
    _fromJsonObject(object: any): IngestSourceIn;
    _toJsonObject(self: IngestSourceIn): any;
};
export {};
