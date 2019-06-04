
import commonStyles from "../../theme/commonStyles";

export const styles = theme => ({
    ...commonStyles(theme),
    talkContent:{
        border: '1px solid red',
        margin: theme.spacing.unit *3,
    },
});
