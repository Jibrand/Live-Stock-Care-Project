import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  MainHeading: {
    textAlign: "center",
    color: "#004580",
  },
  MainHeading2: {
    color: "#2C2C2C",
    marginTop: "10px",
    textAlign: "center",
  },
  span: {
    color: "#00A3C5",
  },
  RequestedquotesButton: {
    color: "white",
  },
  card: {
    position: "relative",
    overflow: "hidden",
   
  },
  cardmedia: {
    paddingTop: "86.25%",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  cardcontent: {
    flexGrow: "1",
  },
}));
