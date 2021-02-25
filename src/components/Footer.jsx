import React, {Component} from 'react';
class Footer extends Component  {
    render() {
        return (
            <div id="footer">
                <div className="container text-center">
                    <div className="col-md-8 col-md-offset-2">
                    <div className="social">
                        <ul>
                        <li><a href="http://facebook.com"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="http://twitter.com"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="http://google.com"><i className="fa fa-google-plus"></i></a></li>
                        </ul>
                    </div>
                    <p>&copy; 2016 Landscaper. Designed by <a href="http://www.templatewire.com" rel="nofollow">TemplateWire</a></p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;