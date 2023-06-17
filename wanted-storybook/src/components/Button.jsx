import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const defaultButton = styled.button`
  color: ${({ $color }) => ($color ? $color : "#000000")};
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : "#BEBEBE"};
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({ backgroundColor, color, label, ...props }) => {
  return (
    <defaultButton $color={color} $backgroundColor={backgroundColor} {...props}>
      {label}
    </defaultButton>
  );
};

Button.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
