// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { ListingType } from "./ListingType";
import type { LocalUserId } from "./LocalUserId";
import type { PersonId } from "./PersonId";
import type { SortType } from "./SortType";

export interface LocalUser {
  id: LocalUserId;
  person_id: PersonId;
  email?: string;
  show_nsfw: boolean;
  theme: string;
  default_sort_type: SortType;
  default_listing_type: ListingType;
  interface_language: string;
  show_avatars: boolean;
  send_notifications_to_email: boolean;
  validator_time: string;
  show_scores: boolean;
  show_bot_accounts: boolean;
  show_read_posts: boolean;
  show_new_post_notifs: boolean;
  email_verified: boolean;
  accepted_application: boolean;
  totp_2fa_url?: string;
  open_links_in_new_tab: boolean;
  blur_nsfw: boolean;
  auto_expand: boolean;
  infinite_scroll_enabled: boolean;
}
