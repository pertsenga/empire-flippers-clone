// These types are generated from: https://app.quicktype.io/?l=ts

export interface ListingApiResult {
  data:   Data;
  errors: any[];
}

export interface Data {
  listings: Listing[];
  count:    number;
  pages:    number;
  page:     number;
  limit:    number;
}

export interface Listing {
  id:                                 string;
  listing_number:                     number;
  public_title:                       string;
  average_monthly_net_profit:         number;
  average_monthly_expenses:           number;
  average_monthly_gross_revenue:      number;
  business_created_at:                Date;
  country:                            Country;
  countries:                          string[];
  first_made_money_at:                Date;
  listing_price:                      number;
  seller_interview_link:              null | string;
  listing_multiple:                   number;
  uses_pbn:                           boolean;
  listing_status:                     ListingStatus;
  summary:                            string;
  assets_included:                    string[];
  hours_worked_per_week:              number;
  opportunities:                      string[];
  risks:                              string[];
  seller_support:                     string;
  reason_for_sale:                    string;
  has_trademark:                      boolean;
  monthly_recurring_revenue:          null;
  monthly_churn_percent:              null;
  inventory_cost:                     null;
  typical_low_valuation:              number;
  typical_high_valuation:             number;
  absolute_low_valuation:             number;
  absolute_high_valuation:            number;
  work_required:                      string[];
  days_on_marketplace:                number;
  sba_financing_approved:             boolean;
  pricing_period_months:              number;
  first_listed_at:                    Date;
  new_listing:                        boolean;
  created_at:                         Date;
  updated_at:                         Date;
  discarded_at:                       null;
  seller_accepting_calls:             boolean;
  automated_sales:                    boolean;
  disable_buy_now:                    boolean;
  circulating_offer_at:               null;
  circulating_offer_completed:        boolean | null;
  amazon_sku_count:                   number | null;
  amazon_uses_brand_registry:         boolean | null;
  net_profit_trend_percent:           number;
  net_profit_trend_percent_months:    number;
  gross_revenue_trend_percent:        number | null;
  gross_revenue_trend_percent_months: number;
  unique_users_trend_percent:         number | null;
  unique_users_trend_months:          number;
  niche_image:                        string;
  monthly_recurring_revenue_multiple: null;
  monetizations:                      Monetization[];
  niches:                             Monetization[];
  sites:                              Site[];
  metrics:                            ListingMetric[];
  combined_site_metrics:              CombinedSiteMetric[];
}

export interface CombinedSiteMetric {
  month:        Date;
  page_views:   number;
  unique_users: number;
}

export enum Country {
  Us = "US",
}

export enum ListingStatus {
  ForSale = "For Sale",
  Sold = "Sold",
}

export interface ListingMetric {
  month:         Date;
  net_profit:    string;
  gross_revenue: string;
  expenses:      string;
  created_at:    Date;
  updated_at:    Date;
  discarded_at:  null;
}

export interface Monetization {
  monetization?: string;
  created_at:    Date;
  updated_at:    Date;
  discarded_at:  null;
  niche?:        string;
}

export interface Site {
  id:                           string;
  listing_id:                   string;
  platform:                     Platform;
  penalties:                    null;
  average_monthly_page_views:   number | null;
  average_monthly_unique_users: number | null;
  uses_google_analytics:        boolean;
  uses_clicky:                  boolean;
  domain_type:                  DomainType | null;
  position:                     number | null;
  created_at:                   Date;
  updated_at:                   Date;
  discarded_at:                 null;
  enable_ahrefs:                boolean;
  metrics:                      SiteMetric[];
}

export enum DomainType {
  COM = "com",
  Info = "info",
  Io = "io",
}

export interface SiteMetric {
  id:              string;
  listing_site_id: string;
  month:           Date;
  unique_users:    number;
  page_views:      number;
  created_at:      Date;
  updated_at:      Date;
  discarded_at:    null;
}

export enum Platform {
  AmazonFBA = "Amazon FBA",
  Other = "Other",
  WordPress = "WordPress",
}