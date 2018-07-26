package com.hirepedal.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@EnableWebMvc
public class MvcConfig {
	
	
	@Value("${image.content.location}")
	private String IMAGE_EXTERNAL_LOCATION;
	@Bean
    WebMvcConfigurer configurer () {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addResourceHandlers (ResourceHandlerRegistry registry) {
            	System.out.println("***************************************");
            	String externalLocation = "file:///"+IMAGE_EXTERNAL_LOCATION;
            	System.out.println("******************************** "  + externalLocation);
                registry.addResourceHandler("/images/**").
                          addResourceLocations(externalLocation);
            }
        };
    }
}
	