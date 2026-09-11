window.NGX_DATA = {

  /*
    GTF NGX DATA

    Only enter figures after they have been manually
    verified from an appropriate NGX source.

    Do not use this file for live/API data.
  */

  lastVerified: "",


  snapshot: [

    /*
    Example structure:

    {
      title: "NGX All-Share Index",
      value: "000,000.00",
      description: "Verified NGX market figure."
    }

    Leave empty until a figure has been verified.
    */

  ],


  indices: [

    {
      name: "NGX All-Share Index",

      description:
        "Tracks the general market movement of listed equities on Nigerian Exchange, including Growth Board companies regardless of capitalization.",

      value: ""
    },

    {
      name: "NGX 30 Index",

      description:
        "An NGX market index covering selected large and liquid companies.",

      value: ""
    },

    {
      name: "NGX Main Board Index",

      description:
        "An index associated with securities listed on the NGX Main Board.",

      value: ""
    },

    {
      name: "NGX Premium Index",

      description:
        "An index associated with securities listed on the NGX Premium Board.",

      value: ""
    },

    {
      name: "NGX Banking Index",

      description:
        "An index tracking the banking segment of the NGX market.",

      value: ""
    },

    {
      name: "NGX Insurance Index",

      description:
        "An index tracking the insurance segment of the NGX market.",

      value: ""
    }

  ]

};
