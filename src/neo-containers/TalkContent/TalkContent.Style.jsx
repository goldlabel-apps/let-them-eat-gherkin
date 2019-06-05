
import commonStyles from "../../theme/commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    talkContent:{
        border: '1px solid rgba(0,0,0,0.25)',
        margin: theme.spacing.unit * 2,
        padding: theme.spacing.unit * 2,
    },
});
