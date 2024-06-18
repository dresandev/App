import React from 'react';
import {View} from 'react-native';
import Badge from '@components/Badge';
import Button from '@components/Button';
import HeaderWithBackButton from '@components/HeaderWithBackButton';
import Icon from '@components/Icon';
import * as Expensicons from '@components/Icon/Expensicons';
import * as Illustrations from '@components/Icon/Illustrations';
import ScreenWrapper from '@components/ScreenWrapper';
import ScrollView from '@components/ScrollView';
import Text from '@components/Text';
import useLocalize from '@hooks/useLocalize';
import useThemeStyles from '@hooks/useThemeStyles';
import Navigation from '@libs/Navigation/Navigation';
import ROUTES from '@src/ROUTES';

function WorkspaceOwnerRestrictedAction() {
    const {translate} = useLocalize();
    const styles = useThemeStyles();

    return (
        <ScreenWrapper
            includeSafeAreaPaddingBottom
            testID={WorkspaceOwnerRestrictedAction.displayName}
        >
            <HeaderWithBackButton
                title={translate('workspace.restrictedAction.restricted')}
                onBackButtonPress={Navigation.goBack}
            />
            <ScrollView>
                <View style={[styles.cardSectionContainer, styles.p5]}>
                    <View style={[styles.flexRow, styles.justifyContentBetween, styles.alignItemsStart, styles.mb3]}>
                        <Icon
                            src={Illustrations.LockClosedOrange}
                            height={48}
                            width={48}
                        />
                        <Badge
                            icon={Expensicons.Unlock}
                            success
                            text={translate('workspace.restrictedAction.addPaymentCardToUnlock')}
                            badgeStyles={styles.alignSelfStart}
                        />
                    </View>
                    <Text style={[styles.textHeadlineH1, styles.mb4]}>{translate('workspace.restrictedAction.addPaymentCardToContinueUsingWorkspace')}</Text>
                    <Text style={[styles.textLabelSupportingEmptyValue, styles.mb5]}>{translate('workspace.restrictedAction.youWillNeedToAddOrUpdatePaymentCard')}</Text>
                    <Button
                        text={translate('workspace.restrictedAction.addPaymentCard')}
                        onPress={() => {
                            Navigation.navigate(ROUTES.SETTINGS_SUBSCRIPTION);
                        }}
                        success
                    />
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
}

WorkspaceOwnerRestrictedAction.displayName = 'WorkspaceUserRestrictedAction';

export default WorkspaceOwnerRestrictedAction;
