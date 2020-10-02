import React from 'react'
// import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography, IconButton, Button, Checkbox, Menu, MenuItem, Paper } from '@material-ui/core/'
import { GitHub, Language, Brightness7, Brightness4 } from '@material-ui/icons'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from '../styles/theme'
import * as strings from '../constants/string.json'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      checked: false,
      anchorEl: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    this.setState({ ...this.state, anchorEl: event.currentTarget })
  }

  handleClose () {
    this.setState({ ...this.state, anchorEl: null })
  }

  handleChange (event) {
    this.setState({ ...this.state, checked: event.target.checked })
  }

  render () {
    const { checked, anchorEl } = this.state
    return (
      <ThemeProvider theme={theme(checked ? 'dark' : 'light')}>
        <AppBar className='appBar' color='default'>
          <Toolbar className='toolbar'>
            <Button className='toolbar-button' edge='start' color='inherit' aria-label='menu'>
              <Typography variant='h6'>
                Huxisme
              </Typography>
            </Button>
            <div className='empty-space' />
            <IconButton className='toolbar-button' color='inherit' href={strings.githubUrl}>
              <GitHub />
            </IconButton>
            <IconButton className='toolbar-button' color='inherit'>
              <Language />
              <Menu
                id='language-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Français</MenuItem>
                <MenuItem onClick={this.handleClose}>English</MenuItem>
              </Menu>
            </IconButton>
            <Checkbox
              className='toolbar-button'
              checked={checked}
              onChange={this.handleChange}
              color='primary'
              name='switchTheme'
              icon={<Brightness7 />}
              checkedIcon={<Brightness4 />}
            />
          </Toolbar>
        </AppBar>
        <main>
          <Paper color='background'>
            test
          </Paper>
        </main>
      </ThemeProvider>
    )
  }
}
