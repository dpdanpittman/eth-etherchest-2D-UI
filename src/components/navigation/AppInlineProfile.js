import React, { useState } from 'react'
import Chip from '@material-ui/core/Chip'
import { Lock } from '@material-ui/icons'
import { Link } from '@reach/router'
import Avatar from '@material-ui/core/Avatar'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  font: {
    fontFamily: '"Orbitron", sans-serif',
  },
  paper: {
    position: 'absolute',
    width: 'auto',
    maxHeight: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

export const AppInlineProfile = () => {
  const classes = useStyles()
  const [validatedTo] = useState()
  const username = ''

  if (!username) {
    return (
      <div className="profile">
        <Tooltip title="Please Sign In to Begin" placement="left">
          <Chip
            icon={<Lock />}
            component={Link}
            color="primary"
            label="Not signed in"
            className={classes.font}
            to="/login"
          />
        </Tooltip>
        <br />
      </div>
    )
  } else {
    return (
      <div className="profile">
        <Chip color="primary" label="Bal: 0 Hive" className={classes.font} />
        <Tooltip title="Signed In" placement="bottom">
          <Chip
            icon={
              <Avatar className={classes.avatar} disabled={true}>
                {validatedTo && (
                  <div>
                    <img
                      alt="Hive Avatar"
                      src={`https://images.hive.blog/u/${validatedTo}/avatar/small`}
                    />
                  </div>
                )}
              </Avatar>
            }
            label={username}
            color="primary"
            className={classes.font}
          />
        </Tooltip>
      </div>
    )
  }
}
