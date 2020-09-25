import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
//import CakeIcon from "@material-ui/icons/Cake";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: 15,
    boxShadow: "0 3px 3px 4px rgba(0, 50, 50, .1)",
    "&:hover": { boxShadow: "0 5px 5px 5px rgba(0, 20, 20, .3)" }
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  return (
    <div className="Product__container">
      <Card className={classes.root}>
        <CardHeader title={props.name} subheader={props.price} />
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.desc}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Typography
            className="Product__Allegens"
            variant="overline"
            color="textSecondary"
            component="p"
          >
            {props.allegens}
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
}
