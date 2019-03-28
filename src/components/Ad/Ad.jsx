import React, { Component } from "react";
import PropTypes from "prop-types";
import ArcAdLib from "./_children/ArcAdLib";

/**
 * Create an arc ad component
 * using the arc ads library. Documentation on
 * configuration settings that can be passed to the library are availabie here:
 * https://github.com/washingtonpost/ArcAds
 * */
class ArcAd extends Component {
  /**
   * Default constructor that also maintains
   * the state for the ad instance
   * */
  constructor(props) {
    super(props);

    this.state = {
      arcads: null
    };
  }

  /**
   * Register the arcAds library when the component mounts
   * and update the state of the component
   * */
  componentDidMount() {
    // pull out all the configrations from props
    const {
      id,
      slotName,
      dimensions,
      display,
      breakpoints,
      adType,
      refresh,
      targeting,
      dfpId,
      bidding
    } = this.props;

    // create the prerenderer callback if there is one
    window.arcAdsPrerenderer = adDetails => {
      return new Promise(resolve => {
        console.log("ARCAD: pre-render function", adDetails);
        if (this.props.prerender) {
          this.props.prerender(adDetails);
        }
        resolve(adDetails);
      });
    };

    /**
     * if we successfully have an static instance of the arc ads library then
     * register this ad with the library and pass in the configurations
     * */
    const instance = ArcAdLib.getInstance();
    if (instance) {
      console.log("SLOTNAME", slotName);
      console.log("ARCAD: registering ad", instance);
      instance.registerAd(
        {
          id,
          slotName,
          dimensions,
          adType,
          display,
          targeting,
          sizemap: {
            breakpoints,
            refresh
          },
          bidding,
          prerender: window.arcAdsPrerenderer
        },
        dfpId
      );
    }

    console.log("ARCAD: ad registered", instance);
  }

  /**
   * Render this instance of the ad
   * with the option to put additional children above or
   * below the actual ad (ie adding in ADVERTISEMENT text)
   * */
  render() {
    const {
      id,
      className,
      childrenPosition,
      children,
      dfpId,
      slotName,
      isAmp,
      ampLayout
    } = this.props;

    if (isAmp) {
      const { height, width, layout, multiSize } = ampLayout;
      return (
        <amp-ad
          width={width}
          height={height}
          layout={layout}
          type={"doubleclick"}
          data-slot={`/${dfpId}/${slotName}`}
          data-multi-size={multiSize}
          data-multi-size-validation="false"
        />
      );
    }

    return (
      <div className={className}>
        {childrenPosition === "top" ? children : ""}
        <div id={id} className={`${slotName} arcad`} />
        {childrenPosition === "bottom" ? children : ""}
      </div>
    );
  }
}

const stringOrNumber = PropTypes.oneOf([PropTypes.string, PropTypes.number]);

const ampLayout = PropTypes.shape({
  layout: PropTypes.string,
  width: stringOrNumber,
  height: stringOrNumber,
  multiSize: PropTypes.string
});

ArcAd.propTypes = {
  id: PropTypes.string, // unique ID for this ad
  dfpId: PropTypes.number, // publishing DFP id number
  children: PropTypes.node, // any values you want to go inside the ad container
  childrenPosition: PropTypes.oneOf(["top", "bottom"]), // position of any children that go inside the ad container
  className: PropTypes.string, // class styles for the ad container
  slotName: PropTypes.string, // slot name for this ad
  dimensions: PropTypes.array, // the reponsive ad sizes for the different breakpoints
  display: PropTypes.oneOf(["mobile", "desktop", "all"]), // the type of ad this is for
  breakpoints: PropTypes.array, // the different screen sizes to use as breakpoints
  refresh: PropTypes.bool, // whether or not to refresh the ad for mobile breakpoint changes
  adType: PropTypes.string, // the type of ad
  targeting: PropTypes.object, // key/value pairs attached to the ad request
  bidding: PropTypes.object, // info about the bidding vendors
  prerender: PropTypes.func, // a function to fire before the ad loads
  isAmp: PropTypes.bool,
  ampLayout
};

ArcAd.defaultProps = {
  isAmp: false,
  ampLayout: {
    width: 300,
    height: 250,
    layout: "responsive",
    multiSize: "300x150,300x100,300x75,300x50"
  },
  refresh: true,
  display: "all",
  bidding: {},
  dimensions: [0, 0]
};

export default ArcAd;
