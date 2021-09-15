import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';


interface CardProps {
    title: string
    content: string
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
                width: '80%',
            }

        },
        heading: {
            fontWeight: 400,
            display: 'flex',
            letterSpacing: '0.4',
            justifyContent: 'space-between',
            [theme.breakpoints.only('xs')]: {
                fontSize: '0.8rem',
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
            fontSize: '0.8rem',
            letterSpacing: '0.4'
        },
    }),
);


export function FaqCollapisbleCard({ title, content }: CardProps) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const expandIcon = expanded ? 'x' : '+'
    return (
        <Card className={classes.root} onClick={handleExpandClick} elevation={0}>
            <CardContent>
                <Typography color="textSecondary" className={classes.heading}>
                    <span>{title}</span>  <span onClick={handleExpandClick} className={'expand-toggle'}> {expandIcon}</span>
                </Typography>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography className={classes.description} paragraph>
                        {content}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card >
    );
}