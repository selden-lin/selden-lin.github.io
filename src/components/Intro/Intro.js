import React from 'react';

import Grid from '@material-ui/core/Grid';
import Particles from 'react-particles-js';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import styles from './intro.module.css'


export default class Intro extends React.Component {
    render() {

        return (
            <Grid container className={styles.gridContainer}>
                <Grid item xs={12} style={{ position: 'relative' }}>
                    <div className={styles.particleDiv}>
                        <Particles
                            params={{
                                "particles": {
                                    "number": {
                                        "value": 100
                                    },
                                    "size": {
                                        "value": 3
                                    }
                                },
                                "interactivity": {
                                    "events": {
                                        "onhover": {
                                            "enable": true,
                                            "mode": "repulse"
                                        }
                                    }
                                }
                            }}
                            height="100vh" />
                    </div>
                    <div className={styles.contentDiv}>
                        <div>
                            <Avatar className={styles.profileImg}>
                                <img width='200px' src={'img/profile.png'} />
                            </Avatar>
                        </div>
                        <Paper className={styles.paper} elevation={3}>
                            <h1>HELLO THERE</h1>

                            <Typography variant="body1" gutterBottom>
                                I am a 4th year computer science student at the University of Toronto.
                                I am also a dual citizen between Canada and the United States.
                                Currently I am looking for a full time software position and am graduating in May 2021.
                                If interested, contact me at selden.lin@gmail.com
                    </Typography>
                            <div className={styles.linkRow}>
                                <a href="https://www.linkedin.com/in/selden-lin" target="_blank" className={styles.linkItem}>
                                    <Avatar className={styles.linkedin}>
                                        <LinkedInIcon />
                                    </Avatar>
                                </a>
                                <a href="https://github.com/selden-lin" target="_blank" className={styles.linkItem}>
                                    <Avatar className={styles.github}>
                                        <GitHubIcon />
                                    </Avatar>
                                </a>
                            </div>
                        </Paper>
                    </div>
                </Grid>

            </Grid>
        )
    }
} 