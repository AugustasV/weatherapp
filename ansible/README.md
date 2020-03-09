# EC2-ansible-playbook
I will create ansible playbook, who will run docker-compose image automatically on EC2 instance
# How to use
```sh
ansible-playbook -i inventory/aws.aws_ec2.yml --ask-vault-pass playbook.yml
```