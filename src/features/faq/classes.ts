import { createStyles, makeStyles, Theme } from '@material-ui/core'
import Background from './illustrations/background-circle.svg'

export const useMainFAQStyle = makeStyles((theme: Theme) =>
    createStyles({
        faq__main: {
            marginTop: 100,
            background: 'white',
            maxWidth: '100vw',
            overflowX: 'hidden',
            [theme.breakpoints.up('md')]: {
                backgroundPosition: 'top -0px right -100px',
                backgroundRepeat: 'no-repeat',
            }
        },
    }),
);


export const useCardContainerStyle = makeStyles((theme: Theme) =>
    createStyles({
        cards: {
            width: '90%',
            margin: 'auto',
            [theme.breakpoints.up('md')]: {

            }
        }
    }),
);

export const useHeroStyle = makeStyles((theme: Theme) =>
    createStyles({
        hero__main: {
            position: 'relative',
            paddingBottom: 50,
            background: theme.palette.background.default,
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
            '& .content': {
                [theme.breakpoints.up('md')]: {
                    width: '80vw'
                },
            }
        },
        illustration: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            },
        },
        bg: {
            marginRight: -200,
        }
    }),
);

export const useSearchContainerStyle = makeStyles((theme: Theme) =>
    createStyles({
        searchRoot: {
            height: '100%',
            marginTop: '20vh',
            [theme.breakpoints.down('sm')]: {
                marginTop: '10vh'
            },
        },
        search: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            margin: 'auto',
            [theme.breakpoints.down('sm')]: {
                width: '90%',
                margin: 'auto',
            }
        },
        tags: {
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            margin: 'auto',
        },
        heading: {
            color: theme.colors.black,
            fontWeight: 900
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
            padding: theme.spacing(1)
        },
        iconButton: {
            padding: 10,
            background: theme.colors.mainGreen,
            borderRadius: 5,
            color: 'white'
        },
    }),
);




export const useCardStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            boxShadow: ' 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            maxWidth: 345,
            zIndex: 99,
            [theme.breakpoints.up('md')]: {
                marginTop: -100,
            },
        },
        media: {
            height: 140
        },
        action: {
            padding: 20
        },
    }),
);




export const useTabStyles = makeStyles((theme: Theme) => ({
    tabContainer: {
        marginLeft: '2vw',
        marginTop: 100,
        [theme.breakpoints.up('lg')]: {
            marginLeft: '7vw',
        },
        [theme.breakpoints.only('md')]: {
            marginLeft: '5vw',
        },
    },
    title: {
        marginBottom: 20,
        fontWeight: 700,
        [theme.breakpoints.only('xs')]: {
            textAlign: 'center'
        },
    },
    tab: {
        '& button': {
            color: theme.colors.black,
            border: 'none'
        },
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        '& .MuiTab-wrapper': {
            textTransform: 'capitalize',
            color: theme.colors.black,
            fontWeight: 550,
        },
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));