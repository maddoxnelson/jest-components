/* React */
import React from "react";
import PropTypes from "prop-types";

const Headlines = props => {
  const {
    headlineClasses = "",
    headlineLevel = 2,
    headlineText,
    headlinesContainerClasses = "",
    subheadlineClasses = "",
    subheadlineLevel = 3,
    subheadlineText,
    url
  } = props;

  const HLevel = `h${headlineLevel}`;
  const SHLevel = `h${subheadlineLevel}`;

  return (
    <div className={headlinesContainerClasses}>
      {headlineText && (
        <HLevel className={headlineClasses}>
          {url ? (
            <a href={url}>{headlineText}</a>
          ) : (
            <span dangerouslySetInnerHTML={{ __html: headlineText }} />
          )}
        </HLevel>
      )}

      {subheadlineText && (
        <SHLevel className={subheadlineClasses}>
          {url ? (
            <a href={url}>{subheadlineText}</a>
          ) : (
            <span dangerouslySetInnerHTML={{ __html: subheadlineText }} />
          )}
        </SHLevel>
      )}
    </div>
  );
};

Headlines.propTypes = {
  headlineClasses: PropTypes.string,
  headlineLevel: PropTypes.number,
  headlineText: PropTypes.string,
  headlinesContainerClasses: PropTypes.string,
  subheadlineClasses: PropTypes.string,
  subheadlineLevel: PropTypes.number,
  subheadlineText: PropTypes.string,
  url: PropTypes.string
};

export default Headlines;
