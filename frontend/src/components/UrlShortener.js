import React, { useState } from 'react';
import axios from 'axios';

const UrlShortener = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!url.trim()) {
      setError('Please enter a URL');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post('/api/shorten', {
        originalUrl: url.trim()
      });
      
      setResult(response.data);
      setUrl('');
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
      alert('Copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="url-shortener-card">
      <h1 className="text-center logo-text">🔗 URL Shortener</h1>
      <p className="text-center text-muted mb-4">
        Transform your long URLs into short, shareable links
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="url" className="form-label">
            Enter your long URL
          </label>
          <input
            type="url"
            className="form-control form-control-lg"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.example.com/some/very/long/path"
            required
          />
        </div>
        
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Shortening...
              </>
            ) : (
              'Shorten URL'
            )}
          </button>
        </div>
      </form>

      {result && (
        <div className="result-card">
          <h5 className="mb-3">✅ Your shortened URL is ready!</h5>
          
          <div className="mb-3">
            <label className="form-label fw-bold">Original URL:</label>
            <p className="text-muted small mb-0" style={{ wordBreak: 'break-all' }}>
              {result.originalUrl}
            </p>
          </div>
          
          <div className="mb-3">
            <label className="form-label fw-bold">Shortened URL:</label>
            <div className="d-flex align-items-center gap-2">
              <input
                type="text"
                className="form-control"
                value={result.shortUrl}
                readOnly
              />
              <button
                className="btn copy-btn"
                onClick={() => copyToClipboard(result.shortUrl)}
                title="Copy to clipboard"
              >
                📋 Copy
              </button>
            </div>
          </div>
          
          <div className="alert alert-info">
            <small>
              💡 <strong>Tip:</strong> Anyone who visits{' '}
              <span className="short-url">{result.shortUrl}</span> will be
              redirected to your original URL.
            </small>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlShortener;

