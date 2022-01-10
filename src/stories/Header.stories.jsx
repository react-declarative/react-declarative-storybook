import React from 'react';

const Header = () => <p>123</p>;

export default {
  title: 'One/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
