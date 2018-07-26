package com.hirepedal.util;

import java.util.Date;
import java.util.Properties;
import java.util.ResourceBundle;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class EmailUtil {

	public static String getConfigProperty(String code) {
		ResourceBundle b = ResourceBundle.getBundle("config");
		return b.getString(code);
	}
	public static void sendMail(String to_email, String cc_email, String subject, String message, String bcc_email) {

		Properties properties = new Properties();
		String host = EmailUtil.getConfigProperty(CONSTANT.HOST);
		String port = EmailUtil.getConfigProperty(CONSTANT.PORT);
		final String userName = EmailUtil.getConfigProperty(CONSTANT.USER);
		final String password = EmailUtil.getConfigProperty(CONSTANT.PASSWORD);
		System.out.println("**************************************** " + userName + " - " + password );
		properties.put("mail.smtp.host", host);
		properties.put("mail.smtp.port", port);
		properties.put("mail.smtp.auth", EmailUtil.getConfigProperty(CONSTANT.AUTH));
		properties.put("mail.smtp.starttls.enable", "true");
		properties.put("mail.user", userName);
		properties.put("mail.password", password);
		properties.put("mail.status", EmailUtil.getConfigProperty(CONSTANT.STATUS));
		//properties.put("mail.smtp.localhost", EmailUtil.getConfigProperty(CONSTANT.MAIL_LOCALHOST));

		// creates a new session with an authenticator

		Authenticator auth = new Authenticator() {
			public PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(userName, password);
			}
		};
		Session session = Session.getInstance(properties, auth);
		try {
			Message msg = new MimeMessage(session);
			msg.setFrom(new InternetAddress(EmailUtil.getConfigProperty("mail.from")));
			msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to_email));
			/*if (cc_email != null)
				msg.setRecipients(Message.RecipientType.CC, InternetAddress.parse(cc_email));
			if (bcc_email != null)
				msg.setRecipients(Message.RecipientType.BCC, InternetAddress.parse(bcc_email));*/
			msg.setSubject(subject);
			msg.setSentDate(new Date());
			msg.setText(message);
			Transport.send(msg);
			System.out.println("Mail sent to " + to_email);
		} catch (MessagingException e) {
			e.printStackTrace();
			// throw new RuntimeException(e);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	public static String getCustomerRegisteration(String firstName, String email) {
		return "Dear "+firstName+", \n"+ 
				"We are really excited to have onboarded! \n"+
				"You have successfully registered with www.hirepedal.com, an innovative market place for renting Bikes, e-bikes, Segways and unicycle. \n" + 
				"To complete registration, please login to hirepedal Android App with your credential to start booking Bikes, e-bikes, Segways and unicycle. \n" +
				"Email: "+email ;

	}
	public static String getPartnerRegisteration(String firstName, String email){
		return "Dear HirePedal Partners ("+firstName+"),\n"+ 
						"You have successfully registered with www.hirepedal.com, an innovative market place for renting Bikes, e-bikes, Segways and unicycle.\n" +
						"To complete registration, please login to the www.hirepedal.com with the registered credential and add inventory to get started. \n \n" +
						"Email: "+email;
	}
	public static void main(String[] args) {
		EmailUtil.sendMail("rmohammed@opteamix.com", "rmohammed@opteamix.com", "test", getPartnerRegisteration("Gaurav", "rmohammed@opteamix.com"), null);
	}
}
