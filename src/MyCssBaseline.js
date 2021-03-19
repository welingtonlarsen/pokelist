import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  "@global": {
    body: {
      ...theme.typography.body1,
      backgroundColor: "#090C10",
    }
  }
});

function MyCssBaseline() {
  return null;
}

MyCssBaseline.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyCssBaseline);