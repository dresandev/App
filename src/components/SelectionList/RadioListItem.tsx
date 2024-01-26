import React from 'react';
import {View} from 'react-native';
import Text from '@components/Text';
import Tooltip from '@components/Tooltip';
import useThemeStyles from '@hooks/useThemeStyles';
import type {ListItemProps} from './types';

function RadioListItem({item, showTooltip, textStyles, alternateTextStyles}: ListItemProps) {
    const styles = useThemeStyles();

    return (
        <View style={[styles.flex1, styles.alignItemsStart]}>
            <Tooltip
                shouldRender={showTooltip}
                text={item.text}
            >
                <Text
                    style={textStyles}
                    numberOfLines={1}
                >
                    {item.text}
                </Text>
            </Tooltip>

            {!!item.alternateText && (
                <Tooltip
                    shouldRender={showTooltip}
                    text={item.alternateText}
                >
                    <Text
                        style={alternateTextStyles}
                        numberOfLines={1}
                    >
                        {item.alternateText}
                    </Text>
                </Tooltip>
            )}
        </View>
    );
}

RadioListItem.displayName = 'RadioListItem';

export default RadioListItem;
