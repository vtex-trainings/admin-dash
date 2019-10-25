import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { Layout, PageBlock, PageHeader, Input } from "vtex.styleguide";

import "./styles.global.css";

class AdminExample extends Component {
  public render() {
    return (
      <Layout
        pageHeader={
          <PageHeader
            title={<FormattedMessage id="admin-example.hello-world" />}
          />
        }
      >
        <PageBlock variation="full">
          <Input
            label="Field 1"/>
          <Input
            label="Field 2"/>
          <Input
            label="Field 3"/>
          <Input
            label="Field 4"/>
        </PageBlock>
      </Layout>
    );
  }
}

export default AdminExample;
