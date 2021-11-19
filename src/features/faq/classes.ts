import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useMainFAQStyle = makeStyles((theme: Theme) =>
    createStyles({
        faq__main: {
            marginTop: 100,
            background: 'white',
            maxWidth: '100vw',
            overflowX: 'hidden'
        }
    })
);

export const useCardContainerStyle = makeStyles((theme: Theme) =>
    createStyles({
        cards: {
            width: '90%',
            margin: 'auto'
        }
    })
);

export const useHeroStyle = makeStyles((theme: Theme) =>
    createStyles({
        hero__main: {
            position: 'relative',
            paddingBottom: 50,
            background: theme.palette.background.default,
            [theme.breakpoints.up('md')]: {
                display: 'flex'
            },
            '& .content': {
                [theme.breakpoints.up('md')]: {
                    width: '80vw'
                }
            }
        },
        illustration: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        },
        bg: {
            marginRight: -200
        }
    })
);

export const useSearchContainerStyle = makeStyles((theme: Theme) =>
    createStyles({
        searchRoot: {
            height: '100%',
            marginTop: '20vh',
            marginLeft: '-12vw',
            margin: 'auto',
            [theme.breakpoints.down('sm')]: {
                marginTop: '5vh',
                margin: 'auto'
            }
        },
        search: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            margin: 'auto',
            [theme.breakpoints.down('sm')]: {
                width: '90%',
                margin: 'auto'
            }
        },
        tags: {
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            margin: 'auto'
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
        }
    })
);

export const useCardStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
            zIndex: 99,
            background: '#fafafa',
            boxShadow: 'rgba(0, 27, 71, 0.16) 0px 29px 32px -25px',
            [theme.breakpoints.up('md')]: {
                marginTop: -100
            }
        },
        media: {
            height: 140
        },
        action: {
            padding: 20
        }
    })
);

export const useTabStyles = makeStyles((theme: Theme) => ({
    tabContainer: {
        marginLeft: '2vw',
        background: 'white',
        maxWidth: 1600,
        margin: 'auto',
        marginTop: 100,
        paddingBottom: 50,
        [theme.breakpoints.up('lg')]: {
            marginLeft: '7vw',
            paddingBottom: 100
        },
        [theme.breakpoints.only('md')]: {
            marginLeft: '5vw',
            paddingBottom: 50
        }
    },
    title: {
        marginBottom: 20,
        fontWeight: 700,
        [theme.breakpoints.only('xs')]: {
            textAlign: 'center'
        }
    },
    tab: {
        '& button': {
            color: theme.colors.black,
            border: 'none'
        }
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        '& .MuiTab-wrapper': {
            textTransform: 'capitalize',
            color: theme.colors.black,
            fontWeight: 600
        }
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`
    }
}));
