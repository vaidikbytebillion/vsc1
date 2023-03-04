import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import NavBar from '../navbar';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';


export default function Contacts() {



    return (
        <>
            <NavBar />
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <InstagramIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <Link href="https://www.instagram.com/vaidiknotdead/?hl=en" target={'blank'} underline="none">
                        <Tooltip title="click to Navigate">
                            <ListItemText primary="@vaidikkkkk" secondary="Instagram" />
                            </Tooltip>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <LinkedInIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <Link href="https://www.linkedin.com/in/vaidik-chouhan-959181228/" target={'blank'} underline="none">
                                <ListItemText primary="Vaidik Chouhan" secondary="Linded In" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <EmailIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <Tooltip title="click to copy">
                                <ListItemText primary="E-mail" secondary="vaidikchauhan205@gmail.com" onClick={() => { navigator.clipboard.writeText("vaidikchauhan205@gmail.com") }} />
                            </Tooltip>
                        </ListItem>
                    </List>
                </>
                );
}