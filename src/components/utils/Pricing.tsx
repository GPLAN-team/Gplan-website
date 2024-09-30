// Import necessary hooks and libraries
import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import FreePlanIcon from "../../public/FreePlanIcon.svg";
import PaidPlanIcon from "../../public/PaidPlanIcon.svg";
import CheckIcon from "../../public/check-icon.svg";

// Define the props for PricingCard with an additional usdToInrRate prop
const PricingCard = (props: {
  type: string;
  heading: string;
  price: string;
  features: Array<string>;
  usdToInrRate?: number;
}) => {
  // Helper function to format INR
  const formatINR = (num: number): string => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(num);
  };

  // Helper function to convert USD price to INR
  const convertPrice = (price: string, rate: number): string => {
    const match = price.match(/\$([\d,.]+)/);
    if (match && match[1]) {
      const amount = parseFloat(match[1].replace(/,/g, ""));
      const converted = amount * rate;
      return ` (${formatINR(converted)})`;
    }
    return "";
  };

  return (
    <div
      className="pricing-outer-div"
      style={{ backgroundColor: props.type === "basic" ? "#F2F7FC" : "#FFF" }}
    >
      {props.type === "basic" && (
        <div className="pricing-top-right-corner-div">
          <p>Most Popular</p>
        </div>
      )}
      <div className="pricing-header-div">
        <img
          src={props.type === "free" ? FreePlanIcon : PaidPlanIcon}
          alt={props.type === "free" ? "free-plan-icon" : "paid-plan-icon"}
        />
        <p className="pricing-header-heading">{props.heading}</p>
        <p className="pricing-header-price">
          {props.price}
          {props.usdToInrRate && convertPrice(props.price, props.usdToInrRate)}
        </p>
        <p
          className="pricing-header-supporting-text"
          style={{ visibility: props.type === "free" ? "hidden" : "visible" }}
        >
          Billed monthly.
        </p>
      </div>
      <Box
        className="pricing-content-div"
        sx={{ height: { xs: "172px", sm: "332px" } }}
      >
        <p className="pricing-content-heading">
          {props.type === "free" || props.type === "basic"
            ? "Features you'll love:"
            : props.type === "pro"
            ? "Everything in Basic Plus:"
            : "Everything in Pro Plus:"}
        </p>
        {props.features.map((feature, index) => (
          <div className="pricing-feature-line" key={index}>
            <img src={CheckIcon} alt="check-icon" />
            <p className="pricing-feature-text">{feature}</p>
          </div>
        ))}
      </Box>
      <Box
        className="pricing-footer-div"
        sx={{
          boxShadow: {
            xs: "0px -4px 20px 0px rgba(0, 0, 0, 0.25)",
            sm: "none",
          },
        }}
      >
        <button
          onClick={() => {
            // Redirect to https://app.gplan.in/signup
            window.location.href = "https://app.gplan.in/signup";
          }}
          className="pricing-footer-button"
        >
          Get Started
        </button>
      </Box>
    </div>
  );
};

const Pricing = () => {
  const [usdToInrRate, setUsdToInrRate] = useState<number | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null); // To handle fetch errors

  useEffect(() => {
    const fetchRate = async () => {
      const primaryURL =
        "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";
      const fallbackURL =
        "https://latest.currency-api.pages.dev/v1/currencies/usd.json";
      try {
        // Attempt to fetch from the primary URL
        const response = await fetch(primaryURL);
        if (!response.ok)
          throw new Error(
            `Primary fetch failed with status ${response.status}`
          );
        const data = await response.json();
        console.log("Primary data fetched:", data); // Debugging
        const rate = data.usd?.inr; // Corrected data access
        if (rate) {
          setUsdToInrRate(rate);
          return;
        }
        throw new Error("Rate not found in primary data");
      } catch (error) {
        console.error("Primary fetch failed, trying fallback:", error);
        try {
          // Attempt to fetch from the fallback URL
          const response = await fetch(fallbackURL);
          if (!response.ok)
            throw new Error(
              `Fallback fetch failed with status ${response.status}`
            );
          const data = await response.json();
          console.log("Fallback data fetched:", data); // Debugging
          const rate = data.usd?.inr; // Corrected data access
          if (rate) {
            setUsdToInrRate(rate);
            return;
          }
          throw new Error("Rate not found in fallback data");
        } catch (fallbackError) {
          console.error("Fallback fetch failed:", fallbackError);
          setFetchError("Unable to fetch currency rates at this time.");
          // Optionally, set a default rate or handle the error as needed
        }
      }
    };
    fetchRate();
  }, []);

  return (
    <section id="pricing">
      <Box sx={{ flexGrow: 1, padding: "24px" }}>
        <p className="pricing-main-heading">Plan and Pricing</p>
        {/* Display an error message if fetch fails */}
        {fetchError && (
          <p style={{ color: "red", textAlign: "center" }}>{fetchError}</p>
        )}
        {/* Make all the Items in this div evenly spaced */}
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={3}>
            <PricingCard
              key={1}
              type="basic"
              heading="Student Plan"
              price="$3/mth"
              features={[
                "First 15 days Free",
                "Upto 15 nodes/rooms",
                "Unlimited Floorplans",
                "Dimensionless floorplans for any adjacency",
                "Rectangular floorplans",
                "Dimensioned floorplans",
                "Editing a floorplan by wall movements",
                "Exporting floorplans as json and dxf",
              ]}
              usdToInrRate={usdToInrRate || undefined}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <PricingCard
              key={2}
              type="pro"
              heading="Pro Plan"
              price="$5/mth"
              features={[
                "First 15 days Free",
                "Upto 15 nodes/rooms",
                "Unlimited Floorplans",
                "Dimensionless floorplans for any adjacency",
                "Rectangular floorplans",
                "Dimensioned floorplans",
                "Editing a floorplan by wall movements",
                "Exporting floorplans as json and dxf",
              ]}
              usdToInrRate={usdToInrRate || undefined}
            />
          </Grid>
          {/* Uncomment and modify the following Grid item if you want to add an Enterprise Plan */}
          {/* <Grid item xs={12} sm={3}>
            <PricingCard
              key={3}
              type="enterprise"
              heading="Enterprise Plan"
              price="Custom"
              features={[
                "Unlimited nodes/rooms",
                "Personal Consultancy",
                "24x7 Expert support",
                "Client specific modifications",
                "Large-scale production",
              ]}
              usdToInrRate={usdToInrRate || undefined}
            />
          </Grid> */}
        </Grid>
      </Box>
    </section>
  );
};

export default Pricing;
