import { CButton } from '@coreui/react';
import { PageHeaderWrapper } from './PageHeader.styles';

export const PageHeader = ({ title, button }) => {
  return (
    <PageHeaderWrapper>
      <h1 className="header">{title}</h1>
      {button && (
        <CButton className="button" onClick={button.onClick}>
          {button.title}
        </CButton>
      )}
    </PageHeaderWrapper>
  );
};
