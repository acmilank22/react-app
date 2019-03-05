import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sizeMe from 'react-sizeme';

const StyleTab = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 20px;
`;

function Tab({ children, ...rest }) {
  return <StyleTab {...rest}>{children}</StyleTab>;
}

Tab.defaultProps = {};

Tab.propTypes = {};

export default sizeMe()(Tab);