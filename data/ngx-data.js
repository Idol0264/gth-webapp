/* =========================================================
   GTF — NGX MARKET DATA
   God’stime Fund

   IMPORTANT:
   This file contains manually verified NGX information.
   It is NOT a live market feed.

   Update this file whenever a new verified NGX record
   has been reviewed and added.
   ========================================================= */

const NGX_DATA = {

  /* -------------------------------------------------------
     DATA STATUS
  ------------------------------------------------------- */

  lastVerified: "11 June 2026",

  source:
    "Nigerian Exchange (NGX) Daily Official List",

  sourceType:
    "Official NGX market publication",

  delayedDataNotice:
    "NGX website prices may be delayed. Real-time market data is available through authorised NGX data services.",


  /* -------------------------------------------------------
     MARKET SNAPSHOT
  ------------------------------------------------------- */

  snapshot: [

    {
      title: "NGX All-Share Index",

      value: "244,738.74",

      description:
        "The broad market index tracking the general movement of listed equities on Nigerian Exchange."
    },


    {
      title: "Equity Market Capitalisation",

      value: "₦156.97T",

      description:
        "Total market value of listed equities represented in the verified market record."
    },


    {
      title: "CBN Monetary Policy Rate",

      value: "26.50%",

      description:
        "Monetary Policy Rate reported in the selected market record."
    },


    {
      title: "Data Status",

      value: "Verified",

      description:
        "This snapshot has been manually checked against an official NGX market publication."
    }

  ],


  /* -------------------------------------------------------
     INDICES
  ------------------------------------------------------- */

  indices: [

    {
      name: "NGX All-Share Index",

      description:
        "Tracks the general market movement of listed equities on Nigerian Exchange, including Growth Board companies regardless of capitalization.",

      value: "244,738.74"
    },


    {
      name: "NGX 30",

      description:
        "An NGX index representing a selected group of major listed companies.",

      value: ""
    },


    {
      name: "NGX Main Board",

      description:
        "Tracks companies listed on the Main Board segment of Nigerian Exchange.",

      value: ""
    },


    {
      name: "NGX Premium",

      description:
        "Tracks securities listed on the Premium Board segment of Nigerian Exchange.",

      value: ""
    },


    {
      name: "NGX Banking",

      description:
        "Tracks selected banking-sector companies listed on Nigerian Exchange.",

      value: ""
    },


    {
      name: "NGX Insurance",

      description:
        "Tracks selected insurance-sector companies listed on Nigerian Exchange.",

      value: ""
    },


    {
      name: "NGX Consumer Goods",

      description:
        "Tracks selected companies within the consumer goods sector.",

      value: ""
    },


    {
      name: "NGX Oil & Gas",

      description:
        "Tracks selected companies within the oil and gas sector.",

      value: ""
    },


    {
      name: "NGX Industrial Goods",

      description:
        "Tracks selected companies within the industrial goods sector.",

      value: ""
    },


    {
      name: "NGX Pension",

      description:
        "An NGX index designed for the pension investment segment.",

      value: ""
    }

  ],


  /* -------------------------------------------------------
     MARKET INFORMATION
  ------------------------------------------------------- */

  marketInfo: {

    exchange:
      "Nigerian Exchange Limited (NGX)",

    country:
      "Nigeria",

    assetTypes: [
      "Equities",
      "Bonds",
      "Exchange-Traded Products"
    ],

    officialWebsite:
      "https://ngxgroup.com/",

    priceList:
      "https://ngxgroup.com/exchange/data/equities-price-list/",

    dataLibrary:
      "https://ngxgroup.com/exchange/data/data-library/",

    indices:
      "https://ngxgroup.com/exchange/data/indices/",

    findBroker:
      "https://ngxgroup.com/exchange/trade/becoming-an-investor/find-a-broker/"

  }

};
