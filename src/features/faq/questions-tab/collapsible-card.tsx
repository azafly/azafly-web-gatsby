import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, Collapse, Typography } from '@material-ui/core';

interface CardProps {
    title: string;
    content: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            alignSelf: 'center',
            borderRadius: 12,
            marginBottom: 10,
            cursor: 'pointer',
            boxShadow: '0 2px 16px 0 rgb(0 0 0 / 8%)',
            margin: 'auto',
            width: '90%',
            [theme.breakpoints.up('md')]: {
                width: '80%'
            }
        },
        heading: {
            fontWeight: 550,
            display: 'flex',
            letterSpacing: '0.4',
            justifyContent: 'space-between',
            [theme.breakpoints.only('xs')]: {
                fontSize: '0.8rem'
            },
            '& .expand-toggle': {
                color: theme.colors.mainGreen,
                fontWeight: 800,
                fontSize: '1rem',
                marginRight: -3,
                cursor: 'pointer'
            }
        },
        description: {
            fontSize: '0.95rem',
            letterSpacing: '0.4',
            color: theme.palette.text.primary
        }
    })
);

export function FaqCollapisbleCard({ title, content }: CardProps) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const expandIcon = expanded ? 'x' : '+';
    return (
        <Box boxShadow={0}>
            <Card className={classes.root} onClick={handleExpandClick}>
                <CardContent>
                    <Typography color='textSecondary' className={classes.heading}>
                        <span>{title}</span>{' '}
                        <span onClick={handleExpandClick} className={'expand-toggle'}>
                            {' '}
                            {expandIcon}
                        </span>
                    </Typography>
                </CardContent>
                <Collapse in={expanded} timeout='auto' unmountOnExit>
                    <CardContent>
                        <Typography className={classes.description} paragraph>
                            {content}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Box>
    );
}
