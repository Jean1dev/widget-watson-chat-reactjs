import React, { useState } from 'react';
import { Widget, addResponseMessage, toggleMsgLoader, renderCustomComponent, setQuickButtons } from 'react-chat-widget'
// import { Container } from './styles';
import 'react-chat-widget/lib/styles.css'

export default function Chat({
    title = 'Carlos',
    subtitle = 'Assistente virtual',
    avatar = 'https://cdn.dribbble.com/users/722835/screenshots/4082720/bot_icon.gif',
    fullScreenMode = false,
    onNewUserMessageCallback = () => {}
}) {
    const [badge, setBadge] = useState(0)

    function handleNewUserMessage() {}

    function handleQuickButtonClicked() {}

    return (
        <>
            <Widget
                handleNewUserMessage={handleNewUserMessage}
                profileAvatar={avatar}
                title={title}
                subtitle={subtitle}
                handleQuickButtonClicked={e => handleQuickButtonClicked(e)}
                badge={badge}
                showCloseButton={fullScreenMode}
                fullScreenMode={fullScreenMode}
            />
        </>
    );
}
