import { AdobeSignConfigOut } from "./adobeSignConfigOut";
import { CronConfig } from "./cronConfig";
import { DocusignConfigOut } from "./docusignConfigOut";
import { GithubConfigOut } from "./githubConfigOut";
import { HubspotConfigOut } from "./hubspotConfigOut";
import { SegmentConfigOut } from "./segmentConfigOut";
import { ShopifyConfigOut } from "./shopifyConfigOut";
import { SlackConfigOut } from "./slackConfigOut";
import { StripeConfigOut } from "./stripeConfigOut";
import { SvixConfigOut } from "./svixConfigOut";
import { ZoomConfigOut } from "./zoomConfigOut";
interface _IngestSourceOutFields {
    createdAt: Date;
    id: string;
    ingestUrl?: string | null;
    name: string;
    uid?: string | null;
    updatedAt: Date;
}
interface IngestSourceOutGenericWebhook {
    type: "generic-webhook";
}
interface IngestSourceOutCron {
    type: "cron";
    config: CronConfig;
}
interface IngestSourceOutAdobeSign {
    type: "adobe-sign";
    config: AdobeSignConfigOut;
}
interface IngestSourceOutBeehiiv {
    type: "beehiiv";
    config: SvixConfigOut;
}
interface IngestSourceOutBrex {
    type: "brex";
    config: SvixConfigOut;
}
interface IngestSourceOutClerk {
    type: "clerk";
    config: SvixConfigOut;
}
interface IngestSourceOutDocusign {
    type: "docusign";
    config: DocusignConfigOut;
}
interface IngestSourceOutGithub {
    type: "github";
    config: GithubConfigOut;
}
interface IngestSourceOutGuesty {
    type: "guesty";
    config: SvixConfigOut;
}
interface IngestSourceOutHubspot {
    type: "hubspot";
    config: HubspotConfigOut;
}
interface IngestSourceOutIncidentIo {
    type: "incident-io";
    config: SvixConfigOut;
}
interface IngestSourceOutLithic {
    type: "lithic";
    config: SvixConfigOut;
}
interface IngestSourceOutNash {
    type: "nash";
    config: SvixConfigOut;
}
interface IngestSourceOutPleo {
    type: "pleo";
    config: SvixConfigOut;
}
interface IngestSourceOutReplicate {
    type: "replicate";
    config: SvixConfigOut;
}
interface IngestSourceOutResend {
    type: "resend";
    config: SvixConfigOut;
}
interface IngestSourceOutSafebase {
    type: "safebase";
    config: SvixConfigOut;
}
interface IngestSourceOutSardine {
    type: "sardine";
    config: SvixConfigOut;
}
interface IngestSourceOutSegment {
    type: "segment";
    config: SegmentConfigOut;
}
interface IngestSourceOutShopify {
    type: "shopify";
    config: ShopifyConfigOut;
}
interface IngestSourceOutSlack {
    type: "slack";
    config: SlackConfigOut;
}
interface IngestSourceOutStripe {
    type: "stripe";
    config: StripeConfigOut;
}
interface IngestSourceOutStych {
    type: "stych";
    config: SvixConfigOut;
}
interface IngestSourceOutSvix {
    type: "svix";
    config: SvixConfigOut;
}
interface IngestSourceOutZoom {
    type: "zoom";
    config: ZoomConfigOut;
}
export type IngestSourceOut = _IngestSourceOutFields & (IngestSourceOutGenericWebhook | IngestSourceOutCron | IngestSourceOutAdobeSign | IngestSourceOutBeehiiv | IngestSourceOutBrex | IngestSourceOutClerk | IngestSourceOutDocusign | IngestSourceOutGithub | IngestSourceOutGuesty | IngestSourceOutHubspot | IngestSourceOutIncidentIo | IngestSourceOutLithic | IngestSourceOutNash | IngestSourceOutPleo | IngestSourceOutReplicate | IngestSourceOutResend | IngestSourceOutSafebase | IngestSourceOutSardine | IngestSourceOutSegment | IngestSourceOutShopify | IngestSourceOutSlack | IngestSourceOutStripe | IngestSourceOutStych | IngestSourceOutSvix | IngestSourceOutZoom);
export declare const IngestSourceOutSerializer: {
    _fromJsonObject(object: any): IngestSourceOut;
    _toJsonObject(self: IngestSourceOut): any;
};
export {};
