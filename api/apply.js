import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const data = req.body;

        // Configure Nodemailer transporter based on company email settings
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.dropyhub.com',
            port: process.env.SMTP_PORT || 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER || 'office@dropyhub.com',
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `DropyHub Website <${process.env.SMTP_USER}>`,
            to: 'delivery@dropyhub.com',                     // The destination address you requested
            subject: `New Delivery Exec Application: ${data.name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #D81B60; margin-bottom: 20px;">Delivery Executive Application</h2>
                    
                    <p><strong>1. Full Name:</strong> ${data.name}</p>
                    <p><strong>2. Mobile Number:</strong> ${data.phone}</p>
                    <p><strong>3. Email ID:</strong> ${data.email || 'N/A'}</p>
                    
                    <hr style="border: none; border-top: 1px solid #f0f0f0; margin: 15px 0;">
                    
                    <p><strong>4. City:</strong> ${data.city}</p>
                    <p><strong>5. Area / Location:</strong> ${data.area}</p>
                    <p><strong>6. Age:</strong> ${data.age}</p>
                    
                    <hr style="border: none; border-top: 1px solid #f0f0f0; margin: 15px 0;">
                    
                    <p><strong>7. Do You Have a Bike?:</strong> ${data.hasBike}</p>
                    ${data.hasBike === 'Yes' ? `
                        <p><strong>8a. Bike Model:</strong> ${data.bikeModel}</p>
                        <p><strong>8b. Bike Registration Number:</strong> ${data.bikeReg}</p>
                    ` : ''}
                    <p><strong>9. Driving License Available?:</strong> ${data.drivingLicense}</p>
                    
                    <hr style="border: none; border-top: 1px solid #f0f0f0; margin: 15px 0;">
                    
                    <p><strong>10. Preferred Company:</strong> ${data.preferredCompany?.length > 0 ? data.preferredCompany.join(', ') : 'None selected'}</p>
                    <p><strong>11. Job Type Interested:</strong> ${data.jobType?.length > 0 ? data.jobType.join(', ') : 'None selected'}</p>
                    
                    <hr style="border: none; border-top: 1px solid #f0f0f0; margin: 15px 0;">
                    
                    <p><strong>12. Previous Delivery Experience:</strong> ${data.experience}</p>
                    <p><strong>13. Current Employment Status:</strong> ${data.employmentStatus}</p>
                    <p><strong>14. Message / Additional Details:</strong><br/> ${data.message || 'None provided'}</p>
                    
                    <br/>
                    <small style="color: #888;">This email was automatically generated from the DropyHub website application form.</small>
                </div>
            `,
        };

        const result = await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Application sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ success: false, message: 'Failed to send application.', error: error.message });
    }
}
