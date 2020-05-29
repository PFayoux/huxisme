import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography, IconButton, Button, Checkbox } from '@material-ui/core/'
import { GitHub, Language, Brightness7, Brightness4 } from '@material-ui/icons'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from '../styles/theme'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      checked: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ ...this.state, checked: event.target.checked })
  }

  render () {
    const state = this.state
    return (
      <ThemeProvider theme={theme(state.checked ? 'dark' : 'light')}>
        <AppBar color='default'>
          <Toolbar>
            <Button edge='start' color='inherit' aria-label='menu'>
              <Typography variant='h6'>
                Huxisme
              </Typography>
            </Button>
            <IconButton color='inherit'>
              <GitHub />
            </IconButton>
            <IconButton color='inherit'>
              <Language />
            </IconButton>
            <Checkbox
              checked={state.checked}
              onChange={this.handleChange}
              color='primary'
              name='switchTheme'
              icon={<Brightness7 />}
              checkedIcon={<Brightness4 />}
            />
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    )
  }
}
