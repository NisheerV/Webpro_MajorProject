import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocailMediaWrap, SocialIconLink, SocialIcons, SocialLogo, WebsiteRights } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>OmegaHire</FooterLinkTitle>
                            <FooterLink to='/'>Home</FooterLink>
                            <FooterLink to='/'>Employee Directory</FooterLink>
                            <FooterLink to='/'>Team</FooterLink>
                            <FooterLink to='/'>Investors</FooterLink>
                            <FooterLink to='/'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Departments</FooterLinkTitle>
                            <FooterLink to='/dept'>Sales</FooterLink>
                            <FooterLink to='/dept'>Finance</FooterLink>
                            <FooterLink to='/dept'>Marketing</FooterLink>
                            <FooterLink to='/dept'>Purchasing</FooterLink>
                            <FooterLink to='/dept'>HR</FooterLink>
                            <FooterLink to='/dept'>Customer Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Employees</FooterLinkTitle>
                            <FooterLink to='/emp'>How it works</FooterLink>
                            <FooterLink to='/emp'>Testimonials</FooterLink>
                            <FooterLink to='/emp'>Careers</FooterLink>
                            <FooterLink to='/emp'>Investors</FooterLink>
                            <FooterLink to='/emp'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Update</FooterLinkTitle>
                            <FooterLink to='/reg'>Name</FooterLink>
                            <FooterLink to='/reg'>Contact</FooterLink>
                            <FooterLink to='/reg'>Email</FooterLink>
                            <FooterLink to='/reg'>Designation</FooterLink>
                            <FooterLink to='/reg'>Department</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Register</FooterLinkTitle>
                            <FooterLink to='/reg'>Name</FooterLink>
                            <FooterLink to='/reg'>Contact</FooterLink>
                            <FooterLink to='/reg'>Email</FooterLink>
                            <FooterLink to='/reg'>Designation</FooterLink>
                            <FooterLink to='/reg'>Department</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocailMediaWrap>
                        <SocialLogo to='/'>
                            OmegaHire
                        </SocialLogo>
                        <WebsiteRights>OmegaHire &copy; All Rights Reserved 2021</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                            <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                            <SocialIconLink href="//www.youtube.com" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                            <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com" target="_blank" aria-label="LinkedIn"><FaLinkedin /></SocialIconLink>
                        </SocialIcons>
                    </SocailMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
