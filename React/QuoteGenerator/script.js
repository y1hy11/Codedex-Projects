    // Destructure useState from React
    const { useState } = React;
    // Define the QuoteGenerator component
    const QuoteGenerator = () => {
      const quotes = [
        "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
        "The best way to predict the future is to create it. - Peter Drucker",
        "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "It always seems impossible until it’s done. - Nelson Mandela",
        "I am not afraid... I was born to do this. - Joan of Arc",
        "Believe you can and you’re halfway there. - Theodore Roosevelt"
      ];
      // State to hold the current quote
      const [currentQuote, setCurrentQuote] = useState('');
      // Function to generate a random quote
      const generateQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);// Get a random index from the quotes array
        setCurrentQuote(quotes[randomIndex]);// Set the current quote to the randomly selected quote
      };

      return (
        <div className="container">
          <h1>Quote Generator</h1>
          <button onClick={generateQuote}>Generate Quote</button>
          <p className="quote">{currentQuote}</p>
        </div>
      ); // Return the JSX to render the component
    };

    ReactDOM.render(<QuoteGenerator />,  document.getElementById('root')); //Render the QuoteGenerator component