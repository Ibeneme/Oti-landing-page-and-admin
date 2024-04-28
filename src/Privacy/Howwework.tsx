import React from "react";
import "./HowWeWork.css"; // Don't forget to create your corresponding CSS file

const HowWeWork: React.FC = () => {
  return (
    <div className="how-we-work">
      <h1>How We Work</h1>
      <p>
        When users subscribe to our services, they are required to make payments using USDT (Tether), a stablecoin cryptocurrency.
      </p>
      <p>
        We provide users with a specific wallet address where they can send the USDT for their subscription.
      </p>
      <p>
        Users choose the subscription plan they prefer and the channel (such as cryptocurrency, stocks, forex, or commodities) they want to receive signals for.
      </p>
      <h2>USDT (Tether)</h2>
      <p>
        USDT is a type of cryptocurrency known as a stablecoin, meaning its value is pegged to a stable asset, typically the US dollar. This ensures that the value of USDT remains relatively constant, minimizing the volatility often associated with other cryptocurrencies like Bitcoin or Ethereum.
      </p>
      <h2>Provided Wallet</h2>
      <p>
        We provide users with a unique wallet address where they can send their USDT payments. This wallet address is specifically designated for receiving subscription payments.
      </p>
      <p>
        Users can use their preferred cryptocurrency wallet or exchange platform to send the USDT to the provided wallet address.
      </p>
      <h2>Subscription Channels</h2>
      <p>
        Users have the option to subscribe to signals for specific channels, such as cryptocurrencies, stocks, forex, or commodities. Each channel provides signals and insights related to the corresponding market.
      </p>
      <p>
        By selecting their desired channel, users can tailor their subscription to their trading preferences and interests.
      </p>
      <h2>Security and Transparency</h2>
      <p>
        We prioritize security and transparency in our payment process. Providing users with a dedicated wallet address ensures that payments are securely received and accurately processed.
      </p>
      <p>
        Additionally, we maintain transparency by clearly outlining the payment process and ensuring that users understand how their subscription payments are handled.
      </p>
    </div>
  );
};

export default HowWeWork;
