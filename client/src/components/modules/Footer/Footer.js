import React from 'react'

function Footer(props) {
    return (
        <div>
            <footer className="footer bg-danger sticky-bottom py-4">
                <div className="text-center">
                    <span className="text-white">{props.footer_content}</span>
                </div>
            </footer>
        </div>
    )
}

export default Footer
