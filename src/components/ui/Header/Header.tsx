import React from 'react';

// components
import { MantineLogo } from '@components/ui/Logo';
import { HeaderControls } from '@components/ui/Header';
import { Header as MantineHeader, Container } from '@mantine/core';

// hooks
import useStyles, { HEADER_HEIGHT } from './styles/Header.styles';

const Header = () => {
  const { classes } = useStyles();

  return (
    <MantineHeader height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <MantineLogo />
        <HeaderControls />
      </Container>
    </MantineHeader>
  );
};

export default Header;
