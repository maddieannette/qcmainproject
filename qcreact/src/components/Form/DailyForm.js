import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import SideBarNav from '../DashBoard/SideBarNav';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import VolumeUp from '@material-ui/icons/VolumeUp';
import { makeStyles } from '@material-ui/core/styles';


const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 10,
      label: '10°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 30,
      label: '30°C',
    },
    {
        value: 30,
        label: '30°C',
      },
      {
        value: 40,
        label: '40°C',
      },
        {
        value: 50,
            label: '50°C',
      },
      {
        value: 60,
            label: '60°C',
      },
      {
        value: 70,
            label: '70°C',
      },
      {
        value: 80,
            label: '80°C',
      },
      {
        value: 90,
            label: '90°C',
      },
      {
        value: 100,
            label: '100°C',
      },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }

  const useStyles = makeStyles({
    root: {
      width: 250,
    },
    input: {
      width: 42,
    },
  });

export default function DailyForm() {
    const classes = useStyles();
  const [value, setValue] = React.useState(30);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    if(event.target.value < 100 || event.target.value > 0) { 
    setValue(event.target.value === '' ? '' : Number(event.target.value));
    }
  };
  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
    return (
        <React.Fragment>
            <SideBarNav />
            <Typography variant="h4" gutterBottom >
                Daily Form
      </Typography>
            <Grid container spacing={3} m5={5}>
                <Grid item xs={12} sm={6} mr={5}>
                    <Typography variant="h6" gutterBottom>
                        Centrifuge
                    </Typography>
                    {/* <FormControl className={classes.formControl}> */}
                    <InputLabel id="demo-simple-select-label">Centrifuge Cleaned</InputLabel>
                    <Select
                    //   labelId="demo-simple-select-label"
                    //   id="demo-simple-select"
                    //   value={centrifugeclean}
                    //   onChange={handleChange}
                    >
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                    </Select>
                    <InputLabel id="demo-simple-select-label">Centrifuge Running</InputLabel>
                    <Select
                    //   labelId="demo-simple-select-label"
                    //   id="demo-simple-select"
                    //   value={centrifugeclean}
                    //   onChange={handleChange}
                    >
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                    </Select>
                    </Grid>
                    
                <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>
                        Freezers
                    </Typography>
                    <Typography id="discrete-slider-custom" gutterBottom>
        Custom marks
      </Typography>
      <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
        value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
      />
      <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        fullWidth
                        autoComplete="shipping address-line1"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="Address line 2"
                        fullWidth
                        autoComplete="shipping address-line2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="shipping address-level2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="shipping postal-code"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Use this address for payment details"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
