import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
  const [urls, setUrls] = useState([]);
  const [stats, setStats] = useState({ totalUrls: 0, totalClicks: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [urlsResponse, statsResponse] = await Promise.all([
        axios.get('/api/admin/urls'),
        axios.get('/api/admin/stats')
      ]);
      
      setUrls(urlsResponse.data);
      setStats(statsResponse.data);
    } catch (err) {
      setError('Failed to fetch data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Never';
    return new Date(dateString).toLocaleString();
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  if (loading) {
    return (
      <div className="main-container">
        <div className="container admin-container">
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2">Loading admin data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="main-container">
        <div className="container admin-container">
          <div className="alert alert-danger">
            <h5>Error</h5>
            <p>{error}</p>
            <button className="btn btn-outline-danger" onClick={fetchData}>
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="container admin-container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-4 text-center">
              📊 Admin Dashboard
            </h2>
            
            {/* Statistics Cards */}
            <div className="row stats-cards">
              <div className="col-md-6">
                <div className="stat-card">
                  <div className="stat-number">{stats.totalUrls}</div>
                  <div className="stat-label">Total URLs</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="stat-card">
                  <div className="stat-number">{stats.totalClicks}</div>
                  <div className="stat-label">Total Clicks</div>
                </div>
              </div>
            </div>

            {/* URLs Table */}
            <div className="table-container">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">All Shortened URLs</h5>
                <button className="btn btn-outline-primary btn-sm" onClick={fetchData}>
                  🔄 Refresh
                </button>
              </div>
              
              {urls.length === 0 ? (
                <div className="text-center py-4">
                  <p className="text-muted">No URLs have been shortened yet.</p>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Original URL</th>
                        <th>Short Code</th>
                        <th>Clicks</th>
                        <th>Created</th>
                        <th>Last Accessed</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {urls.map((url) => (
                        <tr key={url._id}>
                          <td>
                            <div style={{ maxWidth: '300px' }}>
                              <a
                                href={url.originalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                                title={url.originalUrl}
                              >
                                {url.originalUrl.length > 50
                                  ? `${url.originalUrl.substring(0, 50)}...`
                                  : url.originalUrl}
                              </a>
                            </div>
                          </td>
                          <td>
                            <code className="text-primary">{url.shortCode}</code>
                          </td>
                          <td>
                            <span className="clicks-badge">
                              {url.clicks}
                            </span>
                          </td>
                          <td>
                            <small className="text-muted">
                              {formatDate(url.createdAt)}
                            </small>
                          </td>
                          <td>
                            <small className="text-muted">
                              {formatDate(url.lastAccessed)}
                            </small>
                          </td>
                          <td>
                            <div className="d-flex gap-1">
                              <button
                                className="btn btn-outline-primary btn-sm"
                                onClick={() => copyToClipboard(url.shortUrl)}
                                title="Copy short URL"
                              >
                                📋
                              </button>
                              <button
                                className="btn btn-outline-success btn-sm"
                                onClick={() => window.open(url.originalUrl, '_blank')}
                                title="Visit original URL"
                              >
                                🔗
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

