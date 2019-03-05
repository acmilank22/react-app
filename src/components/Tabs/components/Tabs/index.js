import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTabs = styled.div`
  display: flex;
  flex-direction: column;
`;

function Tabs({ children, ...rest }) {
  return <StyledTabs {...rest}>{children}</StyledTabs>;
}

Tabs.defaultProps = {};

Tabs.propTypes = {};

export default Tabs;