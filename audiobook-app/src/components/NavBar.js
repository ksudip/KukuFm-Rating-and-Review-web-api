
// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import AppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// // import IconButton from '@mui/material/IconButton';
// // import Typography from '@mui/material/Typography';
// // import InputBase from '@mui/material/InputBase';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import SearchIcon from '@mui/icons-material/Search';
// // import Button from '@mui/material/Button';
// // import Box from '@mui/material/Box';
// // import RefreshIcon from '@mui/icons-material/Refresh';
// // import Select from '@mui/material/Select';
// // import MenuItem from '@mui/material/MenuItem';
// // import FormControl from '@mui/material/FormControl';
// // import InputLabel from '@mui/material/InputLabel';
// // import Drawer from '@mui/material/Drawer';
// // import List from '@mui/material/List';
// // import ListItem from '@mui/material/ListItem';
// // // import ListItemText from '@mui/material/ListItemText';
// // import useMediaQuery from '@mui/material/useMediaQuery';
// // import { useTheme } from '@mui/material/styles';

// // const genres = ['All', 'Fiction', 'Non-Fiction', 'Fantasy', 'Science Fiction', 'Mystery', 'Thriller'];
// // const ratings = [{key:'All',value:"None" }, 
// //                 {key: '>1 stars', value: 1}, 
// //                 {key: '>2 stars', value: 2}, 
// //                 {key: '>3 stars', value: 3}, 
// //                 {key: '>4 stars', value: 4},
// //                 {key: '5 stars', value: 5}];

// // const NavBar = ({ onSearchChange, onGenreChange, onAuthorChange, onRatingChange, authorList, onkukufmclick,}) => {
// //   const [drawerOpen, setDrawerOpen] = useState(false);
// //   const theme = useTheme();
// //   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
// //   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

// //   const handleInputChange = (event) => {
// //     onSearchChange(event.target.value);
// //   };

// //   const handleGenreChange = (event) => {
// //     onGenreChange(event.target.value);
// //   };

// //   const handleAuthorChange = (event) => {
// //     onAuthorChange(event.target.value);
// //   };

// //   const handleRatingChange = (event) => {
// //     onRatingChange(event.target.value);
// //   };

// //   const handlekukufmclick = (event) => {
// //     onkukufmclick();
// //   };

// //   const toggleDrawer = (open) => (event) => {
// //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
// //       return;
// //     }
// //     setDrawerOpen(open);
// //   };

// //   const drawer = (
// //     <div className='toggle'
// //       role="presentation"
// //       onClick={toggleDrawer(false)}
// //       onKeyDown={toggleDrawer(false)}
// //     >
// //       <List>
// //         <ListItem>
// //           <FormControl fullWidth>
// //             <InputLabel>Genre</InputLabel>
// //             <Select label="Genre" onChange={handleGenreChange}>
// //               {genres?.map((genre) => (
// //                 <MenuItem key={genre} value={genre}>
// //                   {genre}
// //                 </MenuItem>
// //               ))}
// //             </Select>
// //           </FormControl>
// //         </ListItem>
// //         <ListItem>
// //           <FormControl fullWidth>
// //             <InputLabel>Author</InputLabel>
// //             <Select label="Author" onChange={handleAuthorChange}>
// //               {authorList?.map((author) => (
// //                 <MenuItem key={author} value={author}>
// //                   {author}
// //                 </MenuItem>
// //               ))}
// //             </Select>
// //           </FormControl>
// //         </ListItem>
// //         <ListItem>
// //           <FormControl fullWidth>
// //             <InputLabel>Rating</InputLabel>
// //             <Select label="Rating" onChange={handleRatingChange}>
// //               {ratings?.map((rating) => (
// //                 <MenuItem key={rating.key} value={rating.value}>
// //                   {rating.key}
// //                 </MenuItem>
// //               ))}
// //             </Select>
// //           </FormControl>
// //         </ListItem>
// //       </List>
// //     </div>
// //   );

// //   return (
// //     <AppBar className='NavBar' position="static">
// //       <Toolbar>
// //         <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer(true)} sx={{ mr: 2 }}>
// //           <MenuIcon />
// //         </IconButton>
// //         <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
// //           <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} onClick={handlekukufmclick}>
// //             Kuku FM Audio Books
// //           </Link>
// //         </Typography>

// //         {!isMobile && (
// //           <IconButton className="refreshIcon" color="black" onClick={handlekukufmclick}>
// //             <Box display="flex" alignItems="center">
// //               <RefreshIcon />
// //               <Typography variant="body2" style={{ marginLeft: "5px" }}>
// //                 reset filters
// //               </Typography>
// //             </Box>
// //           </IconButton>
// //         )}

// //         {!isMobile && !isTablet && (
// //           <>
// //             <FormControl variant="standard" sx={{ minWidth: 120, marginRight: 2 }}>
// //               <InputLabel>Genre</InputLabel>
// //               <Select label="Genre" onChange={handleGenreChange}>
// //                 {genres?.map((genre) => (
// //                   <MenuItem key={genre} value={genre}>
// //                     {genre}
// //                   </MenuItem>
// //                 ))}
// //               </Select>
// //             </FormControl>
// //             <FormControl variant="standard" sx={{ minWidth: 120, marginRight: 2 }}>
// //               <InputLabel>Author</InputLabel>
// //               <Select label="Author" onChange={handleAuthorChange} >
// //                 {authorList?.map((author) => (
// //                   <MenuItem key={author} value={author}>
// //                     {author}
// //                   </MenuItem>
// //                 ))}
// //               </Select>
// //             </FormControl>
// //             <FormControl variant="standard" sx={{ minWidth: 120, marginRight: 2 }}>
// //               <InputLabel>Rating</InputLabel>
// //               <Select label="Rating" onChange={handleRatingChange} >
// //                 {ratings?.map((rating) => (
// //                   <MenuItem key={rating.key} value={rating.value}>
// //                     {rating.key}
// //                   </MenuItem>
// //                 ))}
// //               </Select>
// //             </FormControl>
// //           </>
// //         )}
// //         <InputBase
// //           placeholder="Search…"
// //           inputProps={{ 'aria-label': 'search' }}
// //           onChange={handleInputChange}
// //           sx={{
// //             color: 'inherit',
// //             '& .MuiInputBase-input': {
// //               padding: '8px 8px 8px 32px',
// //               width: 'auto',
// //             },
// //           }}
// //         />
// //         <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
// //           <SearchIcon />
// //         </IconButton>
// //         <Button color="inherit" sx={{ ml: 2 }}>
// //           <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Login</Link>
// //         </Button>
// //         <Button color="inherit" sx={{ ml: 2 }}>
// //           <Link to="/signup" style={{ color: 'inherit', textDecoration: 'none' }}>Sign Up</Link>
// //         </Button>
// //       </Toolbar>
// //       <div style={{"position":"fixed","top":"20px"}}>
// //       <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)} style={{"top":"20px !important"}}>
// //         {drawer}
// //       </Drawer>
// //       </div>
// //     </AppBar>
// //   );
// // };

// // export default NavBar;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import RefreshIcon from '@mui/icons-material/Refresh';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const genres = ['All', 'Fiction', 'Non-Fiction', 'Fantasy', 'Science Fiction', 'Mystery', 'Thriller'];
const ratings = [{ key: 'All', value: "None" }, { key: '>1 stars', value: 1 }, { key: '>2 stars', value: 2 }, { key: '>3 stars', value: 3 }, { key: '>4 stars', value: 4 }, { key: '5 stars', value: 5 }];

const NavBar = ({ onSearchChange, onGenreChange, onAuthorChange, onRatingChange, authorList, onkukufmclick, }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  const handleGenreChange = (event) => {
    onGenreChange(event.target.value);
  };

  const handleAuthorChange = (event) => {
    onAuthorChange(event.target.value);
  };

  const handleRatingChange = (event) => {
    onRatingChange(event.target.value);
  };

  const handlekukufmclick = (event) => {
    onkukufmclick();
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleClick = (event) => {
    event.stopPropagation();
  };

  const drawer = (
    <div className='toggle' onClick={handleClick}>
      <List>
        <ListItem>
          <FormControl fullWidth>
            <InputLabel>Genre</InputLabel>
            <Select label="Genre" onChange={handleGenreChange}>
              {genres?.map((genre) => (
                <MenuItem key={genre} value={genre}>
                  {genre}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl fullWidth>
            <InputLabel>Author</InputLabel>
            <Select label="Author" onChange={handleAuthorChange}>
              {authorList?.map((author) => (
                <MenuItem key={author} value={author}>
                  {author}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl fullWidth>
            <InputLabel>Rating</InputLabel>
            <Select label="Rating" onChange={handleRatingChange}>
              {ratings?.map((rating) => (
                <MenuItem key={rating.key} value={rating.value}>
                  {rating.key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ListItem>
      </List>
    </div>
  );

  return (
    <AppBar className='NavBar' position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer(true)} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} onClick={handlekukufmclick}>
            Kuku FM Audio Books
          </Link>
        </Typography>

        {!isMobile && (
          <IconButton className="refreshIcon" color="black" onClick={handlekukufmclick}>
            <Box display="flex" alignItems="center">
              <RefreshIcon />
              <Typography variant="body2" style={{ marginLeft: "5px" }}>
                reset filters
              </Typography>
            </Box>
          </IconButton>
        )}

        {!isMobile && !isTablet && (
          <>
            <FormControl variant="standard" sx={{ minWidth: 120, marginRight: 2 }}>
              <InputLabel>Genre</InputLabel>
              <Select label="Genre" onChange={handleGenreChange}>
                {genres?.map((genre) => (
                  <MenuItem key={genre} value={genre}>
                    {genre}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ minWidth: 120, marginRight: 2 }}>
              <InputLabel>Author</InputLabel>
              <Select label="Author" onChange={handleAuthorChange}>
                {authorList?.map((author) => (
                  <MenuItem key={author} value={author}>
                    {author}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ minWidth: 120, marginRight: 2 }}>
              <InputLabel>Rating</InputLabel>
              <Select label="Rating" onChange={handleRatingChange}>
                {ratings?.map((rating) => (
                  <MenuItem key={rating.key} value={rating.value}>
                    {rating.key}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </>
        )}
        <div style={{"border": "solid 1px black", "borderRadius": "5px"}}>
        <InputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleInputChange}
          sx={{
            color: 'inherit',
            '& .MuiInputBase-input': {
              padding: '8px 8px 8px 32px',
              width: 'auto',
            },
          }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        </div>
        <Button color="inherit" sx={{ ml: 2 }}>
          <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Login</Link>
        </Button>
        <Button color="inherit" sx={{ ml: 2 }}>
          <Link to="/signup" style={{ color: 'inherit', textDecoration: 'none' }}>Sign Up</Link>
        </Button>
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div onClick={(e) => e.stopPropagation()}>
          {drawer}
        </div>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
