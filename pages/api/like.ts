import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../lib/supabase'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const { postSlug, blogPost } = req.body

    if (!postSlug) {
        return res.status(400).json({ error: 'Post slug is required' })
    }

    if (!blogPost) {
        return res.status(400).json({ error: 'Blog post title is required' })
    }

    const ipAddress = req.headers['x-forwarded-for'] || 
                     req.headers['x-real-ip'] || 
                     req.socket.remoteAddress || 
                     'unknown'

    const ip = Array.isArray(ipAddress) ? ipAddress[0] : ipAddress.split(',')[0]

    try {
        const { data, error } = await supabase
            .from('likes')
            .insert([
                { 
                    ip_address: ip,
                    blog_post: blogPost,
                }
            ])

        if (error) {
            console.error('Supabase error:', error)
            return res.status(500).json({ error: 'Failed to save like', details: error })
        }

        console.log('Like saved successfully:', data)
        return res.status(200).json({ success: true, data })
    } catch (error) {
        console.error('Error saving like:', error)
        return res.status(500).json({ error: 'Internal server error' })
    }
}