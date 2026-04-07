// Test endpoint to verify environment variable
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const apiKey = process.env.BREVO_API_KEY;
  
  return res.status(200).json({
    hasApiKey: !!apiKey,
    apiKeyLength: apiKey ? apiKey.length : 0,
    apiKeyPrefix: apiKey ? apiKey.substring(0, 20) + '...' : 'NOT SET',
    allEnvVars: Object.keys(process.env).filter(key => key.includes('BREVO'))
  });
}
