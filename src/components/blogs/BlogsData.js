import { Box, Typography } from "@mui/material";

export const blogs = [
  {
    id: 1,
    head: "Know When to Service Your Air Conditioner",

    body: (
      <Box sx={{ textAlign: "left", pt: 2 }}>
        <Typography variant="h5" sx={{ pb: 2 }}>
          Insufficient cooling:
        </Typography>
        <Typography variant="body1" sx={{ pb: 3 }}>
          If your air conditioner is no longer cooling your space as effectively
          as it used to or if you notice a decline in its cooling capacity, it
          could indicate a problem that requires servicing.
        </Typography>
        <Typography variant="h5" sx={{ pb: 2 }}>
          Reduced airflow:
        </Typography>
        <Typography variant="body1" sx={{ pb: 3 }}>
          If you observe weak or restricted airflow from the vents, it may
          indicate a clogged or dirty air filter, blocked ducts, or other issues
          that need attention.
        </Typography>
        <Typography variant="h5" sx={{ pb: 2 }}>
          Strange noises:
        </Typography>
        <Typography variant="body1" sx={{ pb: 3 }}>
          Unusual noises like grinding, squealing, or rattling coming from your
          air conditioner may indicate mechanical problems or loose components
          that should be addressed.
        </Typography>
        <Typography variant="h5" sx={{ pb: 2 }}>
          Foul odors:
        </Typography>
        <Typography variant="body1" sx={{ pb: 3 }}>
          If your air conditioner emits unpleasant odors when it's running, it
          could be a sign of mold or bacteria growth, or there might be issues
          with the unit's drainage system.
        </Typography>
        <Typography variant="h5" sx={{ pb: 2 }}>
          Increased energy bills:
        </Typography>
        <Typography variant="body1" sx={{ pb: 3 }}>
          A sudden spike in your energy bills without any other explanation
          could suggest that your air conditioner is not operating efficiently.
          Regular servicing can help optimize energy efficiency.
        </Typography>
      </Box>
    ),
    img: "https://img.freepik.com/free-vector/flat-design-household-renovation-professions-illustration-with-men_23-2148655571.jpg?size=626&ext=jpg&uid=R105808813&ga=GA1.2.2136575466.1684650788&semt=ais",
  },
  // {
  //   id: 2,
  //   head: "wdddsomething",
  //   body: "more ddon something",
  //   img: "https://img.freepik.com/free-vector/flat-design-household-renovation-professions-illustration-with-men_23-2148655571.jpg?size=626&ext=jpg&uid=R105808813&ga=GA1.2.2136575466.1684650788&semt=ais",
  // },
];
