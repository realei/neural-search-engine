import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import itemData from './itemData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flesDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `url(https://storage.googleapis.com/toorbee-image-search-backgrounds/magnifier.jpg)`,
    backgroundSize: 'cover',
  },
  imageList: {
    width: 1500,
    height:1000,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const TitlebarImageList = ({ itemData }) => {
  const classes = useStyles();

  if(itemData) {
    return (
      <div className={classes.root}>
        <ImageList rowHeight={180} cols={6} className={classes.imageList}>
          {/* <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Top K Similar Images</ListSubheader>
          </ImageListItem> */}
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>by: {item.desc}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <h2>Demo project, Please input an image file!</h2>
    </div>
  )
}

export default TitlebarImageList;